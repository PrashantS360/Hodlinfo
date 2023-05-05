import React from 'react';
import {IoMdArrowDropdown} from 'react-icons/io';
import {FaTelegramPlane} from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className='flex justify-around pt-5 flex-col md:flex-row items-center space-y-2'>
            <h3 className='text-4xl text-center text-[#3dc6c1] font-sans font-bold w-[30%]'>HOLDINFO</h3>
            <div className='flex space-x-3 items-center w-[40%] justify-center'>
                <button id="dropdownCheckboxButton1" data-dropdown-toggle="dropdownDefaultCheckbox" className="text-white bg-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-4 py-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">INR<IoMdArrowDropdown className='bg-gray-600 pl-1 text-2xl -mr-2'/></button>
                <button id="dropdownCheckboxButton2" data-dropdown-toggle="dropdownDefaultCheckbox" className="text-white bg-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-4 py-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">BTC<IoMdArrowDropdown className='bg-gray-600 pl-1 text-2xl -mr-2'/></button>
                <button className="text-white bg-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg px-4 py-2 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-600 dark:focus:ring-gray-600" type="button">BUY BTC</button>
            
              

                {/* <!-- Dropdown menu -->
<div id="dropdownDefaultCheckbox" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
    <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
      <li>
        <div className="flex items-center">
          <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
          <label for="checkbox-item-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
        </div>
      </li>
      <li>
        <div className="flex items-center">
            <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="checkbox-item-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
          </div>
      </li>
      <li>
        <div className="flex items-center">
          <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
          <label for="checkbox-item-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default checkbox</label>
        </div>
      </li>
    </ul>
</div> */}

            </div>

            <div className='flex items-center space-x-3 w-[30%] justify-center'>
                <div className='flex items-center'>
                    <span className='rounded-full border-2 border-[#3dc6c1] text-[#3dc6c1] px-1'>
                        57
                    </span>
                </div>
                <button className="text-white bg-[#3dc6c1] hover:bg-[#3dc6c1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-[#3dc6c1] dark:hover:bg-[#3dc6c1] dark:focus:ring-[#3dc6c1]" type="button"><FaTelegramPlane className='bg-[#3dc6c1] mr-2'/>Connect Telegram</button>

                <div className='flex items-center'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3dc6c1] dark:peer-focus:ring-[#3dc6c1] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3dc6c1]"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
