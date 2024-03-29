import { useEffect, useState } from 'react';
import Map from '../components/Map'
import JobChart from '../components/JobChart';


function JobDetails(props) {
  // State to manage height class based on screen height
  const [heightClass, setHeightClass] = useState('');

  // Effect to update height class based on screen height
  useEffect(() => {
    const screenHeight = window.innerHeight;
    let newHeightClass = '';
  
    if (screenHeight >= 900) {
      newHeightClass = 'h-[750px]';
    } else if (screenHeight >= 750) {
      newHeightClass = 'h-[620px]';
    } else if (screenHeight < 750) {
      newHeightClass = 'h-[470px]';
    }
  
    setHeightClass(newHeightClass);
  }, []);

  // Formatting salary values
  const minSalary = (props.info.salary_min).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const maxSalary = (props.info.salary_max).toFixed(0).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const calAvg = (((props.info.salary_min + props.info.salary_max) / 2)-8000).toFixed(0);
  const avg = calAvg.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  
  return (
    <>
    <div className=" h-screen pt-8  z-50  bg-black bg-opacity-60" >
      <div className="mx-auto max-w-screen-lg  bg-white justify-between  rounded-xl items-center">
        <div className='flex-holder items-start px-8 flex justify-between'>
        <h1 className='font-bold  text-2xl mt-8 ' >{props.info.title}</h1>
        <button
            className="ms-auto inline-flex w-8 items-center justify-center rounded-lg bg-transparent text-sm  text-gray-400 mt-8 hover:bg-gray-200 hover:text-gray-900 "
            type="button"
            onClick={(event) => {
            event.stopPropagation(); // Stop event propagation
            props.close(props.info.id);
            }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
        <div className={`details  shadow-lg rounded-2xl px-8 mt-14 basis-1/2 overflow-y-auto ${heightClass}`}>
            <div className="job-header border-b py-7 pl-3">
              <p className='text-gray-700 text-md'>{props.info.company.display_name}</p>
              <p className='mb-3 text-gray-500 text-sm'>{props.info.location.display_name}</p>
              <div className='mb-3 '>
              <span>{`£ ${minSalary} - ${maxSalary}  a year`}</span> 
              <span className='pl-5 uppercase'>{props.info.contract_time}</span>
            </div>
            <a href={props.info.redirect_url}  target="_black" className='mt-3 inline-block px-5 py-3 text-base font-medium text-center text-white rounded-full bg-gray-800 hover:bg-opacity-60 focus:ring-4 '>apply now</a>
            </div>
          <div>
          <div className="job-sub-header justify-between xl:flex 2xl:flex md:flex sm:block  border-y py-7 px-3">
            <div className='job-datails'>
              <h1 className='font-bold mb-6 text-lg'>Job detail</h1>
              <div className="flex pt-4">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
                <h4 className='ml-2  font-semibold'>Pay</h4>
              </div>
              <p className='ml-8 my-3 bg-gray-200 p-1 rounded-md inline-block'>£ {minSalary}  -  £ {maxSalary}</p>
              <div className="flex pt-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <h4 className=' font-semibold ml-2'>Job Type</h4>
              </div>
              <p className='ml-8 my-3 inline-block bg-gray-200 p-1 rounded-md'>Full-time</p>
              <div className="flex pt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
              </svg>
              <h4 className=' font-semibold ml-2 capitalize '> job category</h4>
              </div>
              <p className='ml-8 my-3 inline-block bg-gray-200 p-1 rounded-md' >{props.info.category.label}</p></div>
            <div className=" chart  2xl:w-96 xl:w-96 lg:w-96 md:w-80  sm:w-72 w-72   2xl:mt-0  xl:mt-0  lg:mt-0 md:mt-0  sm:mt-0 mt-16">
              <p className="text-gray-500 pb-4">Salary Comparison 2024</p>
              <div className='mb-12'>
              <span className='text-gray-500'>Avg:</span><span className='font-semibold'> {`£${avg}`}</span>
              </div>
  
              <JobChart bar= {props.info}/>
            </div>
            </div>
          <div className="job-location  justify-between xl:flex 2xl:flex md:flex sm:block border-y py-7 px-3">
            <div className="location-text">
              <h1 className='font-bold mb-6 text-lg'>Location</h1>
              <div className="flex pt-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"      strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p className='ml-2'>{props.info.location.display_name}</p>
                </div>
                <a
                href={`https://www.google.com/maps/dir//+${props.info.location.display_name}`}
                
                className="text-blue-500 hover:underline  mt-5 inline-block  font-medium  2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-md items-center"
                target="_blank"
                >
                Google Direction
                </a>
               
              
            </div>
              {!props.info.latitude || !props.info.longitude ? null : 
              <div className="map  2xl:mt-0  xl:mt-0  lg:mt-0 md:mt-0  sm:mt-16 mt-16 2xl:w-96 2xl:h-96 xl:w-96 xl:h-96 lg:w-96 lg:h-96 md:w-80 md:h-80 sm:w-72 sm:h-72 w-72 h-72 ">
              <Map
            latitude = {props.info.latitude}
            longitude = {props.info.longitude}
            />
            </div>}
          </div>
          <div className="job-description border-y py-7 pl-3">
            <h1 className='font-bold mb-6 text-lg'>Full job description</h1>
            <p className='pt-4'>{props.info.description}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default JobDetails
