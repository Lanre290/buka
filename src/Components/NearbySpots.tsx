import { BsClock, BsStarFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import { HiLocationMarker } from 'react-icons/hi';
import { AddSpot } from './addSpot';
import { useState } from 'react';

const mockSpots = [
    {
      id: "1",
      name: "Mama Sisi's Kitchen",
      address: "15 Ogunlana Drive, Surulere, Lagos",
      rating: 4.8,
      reviewCount: 124,
      priceRange: "₦₦",
      cuisine: ["Traditional", "Amala & Ewedu", "Grilled Fish"],
      openHours: "Open until 10 PM",
      verificationStatus: "verified" as const,
      distance: "0.8 km",
    },
    {
      id: "2",
      name: "Buka Express",
      address: "45 Allen Avenue, Ikeja, Lagos",
      rating: 4.5,
      reviewCount: 89,
      priceRange: "₦",
      cuisine: ["Fast Food", "Traditional", "Amala"],
      openHours: "Open 24 hours",
      verificationStatus: "verified" as const,
      distance: "1.2 km",
    },
    {
      id: "3",
      name: "Yakoyo Restaurant",
      address: "12 Admiralty Way, Lekki Phase 1, Lagos",
      rating: 4.6,
      reviewCount: 156,
      priceRange: "₦₦₦",
      cuisine: ["Premium", "Traditional", "Continental"],
      openHours: "Closes at 9 PM",
      verificationStatus: "pending" as const,
      distance: "2.1 km",
    },
  ];


const NearbySpots = () => {
    const  [addNewSpotUI, setAddNewSpotUI] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col" style={{width: '33%'}}>
            <div className="flex flex-row justify-between items-center p-4">
                <h3 className="text-black font-bold text-xl">Nearby spots</h3>
                <button onClick={() => setAddNewSpotUI(true)} className="px-4 py-2 bg-[#BD6628] text-white rounded-md cursor-pointer hover:bg-[#BD6628]/90">Add a spot</button>
            </div>

            <div className="flex flex-col gap-4 -pr-2">
                {
                    mockSpots.map(spot => (
                        <div key={spot.id} className="border border-gray-300 p-4 rounded-xl py-2 hover:bg-gray-100 transition-colors">
                            <div className="flex flex-row gap-x-8 items-center">
                                <img src={logo} alt={spot.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div className='flex flex-col gap-y-2'>
                                    <h4 className="text-lg font-semibold text-[#BD6628]">{spot.name}</h4>
                                    <div className="text-gray-600 text-sm flex flex-row items-center"> <BsStarFill className='text-[#BD6628]' /> &nbsp; <b>{spot.rating}</b> &nbsp;({spot.reviewCount} reviews) &bull; {spot.distance} away</div>
                                    <div className="text-gray-600 text-sm flex flex-row items-center"> <HiLocationMarker className='text-[#BD6628]' /> &nbsp;{spot.address}</div>
                                    <div className="text-gray-600 text-sm flex flex-row items-center"> <BsClock className='text-[#BD6628]' /> &nbsp;{spot.openHours} &bull; ~{spot.priceRange}</div>
                                    <p className={`text-sm font-medium ${spot.verificationStatus === 'verified' ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {spot.verificationStatus === 'verified' ? 'Verified' : 'Pending Verification'}
                                    </p>
                                    <div className="flex flex-row flex-wrap gap-2">
                                        {
                                            spot.cuisine.map((cuisine, index) => (
                                                <span key={index} className="text-gray-600 text-sm inline-block bg-[#BD6628]/20 rounded-full mr-2 w-fit px-3 py-1">{cuisine}</span>
                                            ))
                                        }
                                    </div>

                                    <div className="flex flex-row flex-wrap gap-2">
                                        <button className="px-3 py-1 bg-[#BD6628] text-white rounded-md cursor-pointer hover:bg-[#BD6628]/90 w-fit">View</button>
                                        <button className="px-3 py-1 bg-[#f1f1f1] text-black border border-gray-400 rounded-md cursor-pointer w-fit">Get Direction</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>


        {addNewSpotUI && <AddSpot onClose={() => setAddNewSpotUI(false)} />}

        </>
    );
}

export default NearbySpots;