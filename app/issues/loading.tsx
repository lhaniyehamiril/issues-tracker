'use client'

import { PiArrowBendRightDownBold } from "react-icons/pi";
import {Skeleton , SkeletonTheme} from '@/app/component'
import IssueAction from './IssueAction';
import { usePathname } from "next/navigation";

const LoadingIssuesPage = () => {

   const pathname = usePathname();

   if (pathname.match(/^\/issues\/(new|[0-9a-zA-Z_-]+)/))
     return null
       
  const issues = [1, 2, 3, 4];

  return (
    <div className='mt-5'>
      <h2 className='font-bold text-[1.16rem] ml-3 flex items-center '>issue <PiArrowBendRightDownBold color='#555' /></h2>
    <div className="flex items-center justify-center md:justify-start">
      <ul className="bg-[#eee] mt-5 w-[95%] md:w-72 h-80 overflow-y-auto flex flex-col gap-2 p-3 pt-5 items-center rounded-3xl">
        <SkeletonTheme baseColor="#d6d6d6" highlightColor="#f0f0f0">
          {issues.map((issue) => (
            <li
              key={issue}
              className="bg-white rounded-[1.3rem] flex items-center p-3 w-[95%] gap-2 justify-between mb-3"
            >
              <div className="flex items-center gap-2">
                <Skeleton circle width={30} height={30} /> 
                <Skeleton width={80} height={20} borderRadius={'0.75rem'} />
              </div>
              <Skeleton width={40} height={20} borderRadius={'0.75rem'}/>
            </li>
          ))}
        </SkeletonTheme>
      </ul>
    </div>
      <IssueAction />
    </div>
  );
};

export default LoadingIssuesPage;
