import React, { useState, useEffect } from 'react';

const Home = () => {

  const [items, setItems] = useState({});

  const getItems = async () => {
    const res = await fetch(`http://localhost:8000/gettickers`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await res.json();
    setItems(json);
  }

  useEffect(() => {
    getItems();
  }, [])


  return (
    <div className="flex justify-center mt-5">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-[90%] m-auto border-separate">
          <thead className="text-gray-400 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-gray-400">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-gray-400">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-gray-400">
                Last
              </th>
              <th scope="col" className="px-6 py-3 text-gray-400">
                Buy / Sell Price
              </th>
              <th scope="col" className="px-6 py-3 text-gray-400">
                Volume
              </th>
              <th scope="col" className="px-6 py-3 text-gray-400">
                Base Unit
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {
              Object.keys(items).map((key, index) => {
                return <tr key={key} className="mb-5">
                  <th scope="row" className="px-6 py-4 my-2 font-medium text-gray-500 whitespace-nowrap dark:text-white bg-gray-700 rounded-l-lg">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4 bg-gray-700 flex space-x-2 items-center">
                   <img className='w-6 h-6 rounded-full mr-2' src={`./assets/${index+1}.png`} alt="currency"/> {items[key].name} 
                  </td>
                  <td className="px-6 py-4 bg-gray-700">
                    ₹ {items[key].last}
                  </td>
                  <td className="px-6 py-4 bg-gray-700">
                    ₹ {items[key].buy} / ₹ {items[key].sell}
                  </td>
                  <td className={`px-6 py-4 bg-gray-700 ${items[key].volume.toString().includes('8')?"text-green-600":"text-red-600"}`}>
                    {items[key].volume}
                  </td>
                  <td className="px-6 py-4 bg-gray-700 rounded-r-lg">
                    {items[key].base_unit}
                  </td>
                </tr>
              })
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Home;
