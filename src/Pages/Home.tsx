import { useEffect, useState } from 'react';
import Loading from '../Components/Loading';
import { AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { HiLocationMarker } from 'react-icons/hi';
import { BiMenu, BiSearch } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs';
import Map from '../Components/Map';
import NearbySpots from '../Components/NearbySpots';

const Home = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [displayMode, setDisplayMode] = useState<'map' | 'list'>('map');

    useEffect(() => {
      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2300);
    
      return () => {
        clearTimeout(loadingTimer);
      }
    }, [])

    return (
        <div>
            <AnimatePresence>
                {isLoading && <Loading />}
            </AnimatePresence>

            <div className={`w-screen h-52 bg-[#f9f5e7]/95 flex flex-col justify-center`}>
                <div className="flex flex-row justify-between w-full pb-6">
                    <div className="flex flex-row h-full items-end ml-6">
                        <img className="w-24 h-24" src={logo} alt="Description" />
                        <div className="flex flex-col h-full justify-end ml-2 mb-3">
                            <div className="text-3xl font-bold text-[#DB5F34] buka-font">Buka</div>
                            <div className="text-md text-[#634741] -mt-2">Discover authentic and trusted amala spots around you</div>
                        </div>
                    </div>

                    <div className="flex flex-row h-full items-end mr-6">
                        <div className={`px-5 py-2 rounded-md flex flex-row gap-x-3 ${displayMode === 'map' ? 'bg-[#BD6628] hover:bg-[#BD6628]/95' : 'bg-[#f1f1f1] border-[#BD6628] border'} h-12 cursor-pointer items-center mr-4`} onClick={() => setDisplayMode('map')}>
                            <HiLocationMarker className={`${displayMode === 'map' ? 'text-white' : 'text-[#DB5F34]'}`} />
                            <h3 className={`${displayMode === 'map' ? 'text-white' : 'text-[#DB5F34]'}`}>Map</h3>
                        </div>

                        <div className={`px-5 py-2 rounded-md flex flex-row gap-x-3 ${displayMode === 'list' ? 'bg-[#BD6628] hover:bg-[#BD6628]/95' : 'bg-[#f1f1f1] border-[#BD6628] border'} h-12 cursor-pointer items-center mr-4`} onClick={() => setDisplayMode('list')}>
                            <BiMenu className={`${displayMode === 'list' ? 'text-white' : 'text-[#DB5F34]'}`} />
                            <h3 className={`${displayMode === 'list' ? 'text-white' : 'text-[#DB5F34]'}`}>List</h3>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-start w-fit ml-8">
                    <form className="flex flex-grow  border border-gray-300 rounded-xl gap-x-2 p-2">
                        <BiSearch size={40} className=' text-xl text-[#DB5F34] cursor-pointer' />
                        <input type="text" name="search" id="search" placeholder="Search..." className="rounded-md p-2 w-full focus:outline-none" />
                    </form>
                    <button title='Filter' className='ml-4 bg-[#f1f1f1] border border-[#BD6628] rounded-xl flex items-center justify-center p-2 cursor-pointer mr-4'>
                        <BsFilter size={40} className='text-xl text-[#DB5F34]' />
                    </button>
                </div>
            </div>

            <div className="flex flex-row" style={{width: '100%', height: '100%'}}>
                <Map />
                <NearbySpots />
            </div>
        </div>
    );
};

export default Home;