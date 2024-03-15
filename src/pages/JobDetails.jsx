import data from '../utils/data.json'

function JobDetails() {
  return (
    <div className="cantainer mx-auto px-4">
      <div className="flex">
        <div className="details basis-1/2">
          <div className="job-header border py-7 pl-3">
            <h1 className='font-bold mb-3' >{data[0].title}</h1>
            <p className='mb-3 '>{data[0].location.display_name}</p>
            <div className='mb-3'>
            <span>${data[0].salary_min} a year</span> 
            <span className='pl-7'>full-time</span>
            </div>
            <a href={data[0].redirect_url} className='p-3 mt-3 inline-block bg-gray-500 rounded '>apply now</a>
          </div>
          <div className="job-sub-header border py-7 pl-3">
            <h1 className='font-bold mb-3'>Job detail</h1>
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
            <h4 className='ml-2'>Pay</h4>
            </div>
            <p className='ml-8 mb-3'>£ {data[0].salary_min}  -  £ {data[0].salary_max}</p>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
              </svg>
              <h4 className='ml-2'>Job Type</h4>
            </div>
            <p className='ml-7 mb-3'>Full-time</p>
            
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h4 className='ml-2'>Shift and schedule</h4>
            </div>
            <p className='ml-8 mb-3'>???</p>
          </div>
          <div className="job-location border py-7 pl-3">
          <h1 className='font-bold mb-3'>Location</h1>
            <p>{data[0].location.display_name}</p>
          </div>
          <div className="job-description border py-7 pl-3">
            <h1 className='font-bold mb-3'>Full job description</h1>
            <p>{data[0].description}</p>
          </div>
        </div>
        <div className="chart basis-1/2">
          <img src='/images/Bar-Chart-Vertical.png'/>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
