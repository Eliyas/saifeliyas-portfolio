import { User } from "@/common/models";
import Header from "@/components/Header"
import data from "@/data/data";
import useCurrentUser from "@/hooks/useCurrentUser"
import { BASE_URL } from "@/utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { GiSmartphone } from "react-icons/gi";

export default function HireMe({ userIdMap }: { userIdMap: Record<string, User> }) {
    const { data: user } = useCurrentUser(userIdMap);
    return (
        <>
            <div className="flex flex-col justify-center">
                {user.upWork && <div className="flex flex-row justify-center gap-4 p-5 text-[#0a66c2] cursor-pointer hover:text-[#34587d]">
                    <Link href={user.upWork} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center w-[260px]">
                        <Image src={"/images/up1.png"} alt="Insta" width={50} height={50} className="h-[50px]" />
                        <span className="ml-3">MohamedEliyas@upwork</span>
                    </Link>
                </div>}

                {user.freelancer && <div className="flex flex-row justify-center gap-4 p-5 text-[#0a66c2] cursor-pointer hover:text-[#34587d]">
                    <Link href={user.freelancer} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center w-[260px]">
                        <Image src={"/images/fr.png"} alt="Insta" width={50} height={50} className="h-[50px]" />
                        <span className="ml-3">MohamedEliyas@freelancer</span>
                    </Link>
                </div>}

                {user.mobile && <div className="flex flex-row justify-center gap-4 p-5 text-[#0a66c2] cursor-pointer hover:text-[#34587d]">
                    <div className="flex flex-row items-center w-[260px]">
                        <GiSmartphone size={50} />
                        <span className="ml-3">{user.mobile}</span>
                    </div>
                </div>}
            </div>
        </>
    )
}


export const getStaticProps = async () => {
    const staticData = data;
    return {
      props: { data: staticData, userIdMap: staticData.userIdMap }
    };
};
