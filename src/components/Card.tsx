import { type User } from "~/pages/api/user/[id]";
import { RejectIcon } from "./icons/reject";
import AcceptIcon from "./icons/accept";
import InstagramIcon from "./icons/instagram";
import TikTokIcon from "./icons/tiktok";
import DiamondIcon from "./icons/diamond";


interface CardProps {
  user: User
}

// Please build the card component here

const Card: React.FC<CardProps> = ({ user }) => {
  // Please fetch the user data from the API

  return <div className="flex w-full  rounded-xl bg-custom-yellow hover:bg-gray-100 flex-col">
    <div className="flex justify-between flex-row w-full py-6 pl-9 px-5">
      <div className="flex flex-row  w-full ">
        <div className="flex flex-row gap-4 py-1">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
          />
        </div>
        <div className="pl-4 px-14 w-full">
          <div className="flex flex-row gap-4 w-full justify-between">
            <div>
              <h2 className="text-2xl font-regular leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                {user.name}
              </h2>
              <span className="mt-2 flex items-center text-lg text-gray-500">{user.location}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="inline-flex align-middle gap-2 h-10 text-base font-regular items-center rounded-2xl bg-yellow-500 px-5 py-6 text-gray-600 ">
                <InstagramIcon className="w-5 h-5" /> {user.instagram} |
                <span className="text-base">{user.instagram_followers}</span>
              </span>
              <span className="inline-flex align-middle gap-2 h-10 text-base font-regular items-center rounded-2xl bg-yellow-500 px-5 py-6 text-gray-600 ">
                <TikTokIcon className="w-6 h-8" /> {user.tiktok}
              </span>
            </div>


          </div>
          <div className="py-4">
            <span className="display-linebreak">
              {user.description}
            </span>
          </div>
          <div className="flex gap-4 flex-col" >
            <div className="flex gap-3 items-center"  >
              <span className="font-medium text-lg">High Potential</span>
              <span className="border-l-2 min-h-5 border-black" />
              <a className="underline text-stone-400 text-sm" href="http://google.com">View Application</a>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                {Array.from(Array(16).keys()).map((item, key) => {
                  return <DiamondIcon className={`w-4 h-4 fill-current  ${user.potential > item ? 'text-green-700' : 'text-green-700 opacity-10'} `} key={item + key} />
                })}

              </div>
              <span className="bg-white text-black text-base font-medium me-2 px-2.5 py-1 rounded-xl">Consumer</span>
            </div>

          </div>
        </div>

      </div>
      <div className="flex flex-row gap-1 min-images overflow-y-auto	scrollbar-hide">
        {user.pics.map(item => {
          return <img key={item.id} className="h-60 min-w-56 rounded-lg" src={item.url} alt="image description" />
        })}

      </div>
    </div>
    <div className="flex bg-yellow-500 py-4 pl-6 px-5 justify-between">
      <div className="flex gap-4">
        <button className="text-green-600 bg-green-100 hover:bg-green-100 focus:outline-none focus:ring-green-300 font-medium rounded-xl text-base px-5 py-2 text-center inline-flex items-center" type="button">Accept
          <AcceptIcon className="w-3 h-5 ms-2 fill-current" />
        </button>
        <button className="text-red-600 bg-red-100 hover:bg-red-100 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-base px-5 py-2 text-center inline-flex items-center" type="button">Reject
          <RejectIcon className="w-5 h-5 ms-1 fill-current" />
        </button>
        <button className="text-gray-400 bg-gray-100 hover:bg-gray-100 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-base px-5 py-2 text-center inline-flex items-center" type="button">
          Source: Direct
        </button>
      </div>
      <div className="flex flex-row gap-4 items-center text-gray-500">
        <text className="text-orange-300 bg-yellow-100 font-medium rounded-2xl text-base px-5 py-2 text-center inline-flex items-center" >
          Overdue
        </text>
        <text>
          Applied: 04/08/2024
        </text>
      </div>
    </div>
  </div>;
}

export default Card

