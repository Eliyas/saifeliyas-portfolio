import { User } from "@/common/models";
import Header from "@/components/Header"
import SidebarLogo from "@/components/layout/SidebarLogo";
import data from "@/data/data";
import useCurrentUser from "@/hooks/useCurrentUser"
import { BASE_URL } from "@/utils";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { BiLinkAlt } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { GiSmartphone } from "react-icons/gi";

export default function Contact({ userIdMap }: { userIdMap: Record<string, User> }) {
    const { data: user } = useCurrentUser(userIdMap);
    return (
        <>
            <Header label="Contact" />

            <div className="p-5 flex flex-col justify-center items-center">
                {user.mobile && <div className="w-[260px] flex flex-row gap-4 p-5 text-[#0a66c2] cursor-pointer hover:text-[#34587d]">
                    <GiSmartphone size={30} />
                    <span>{user.mobile}</span>
                </div>}

                {user.website && <div className="w-[260px] flex p-5 text-[#0a66c2] cursor-pointer hover:text-[#34587d]">
                    <BiLinkAlt size={30} />
                    <Link href={user.website} className="pl-5" target="_blank" rel="noopener noreferrer" >{user.website}</Link>
                </div>}


                {user.gmail && <div className="w-[260px] flex p-5 text-[#0a66c2] cursor-pointer hover:text-[#34587d]">
                    <Image src={"/images/gmail-logo.png"} alt="Insta" width={30} height={30} />
                    <Link href={`https://mail.google.com/mail/?view=cm&fs=1&to=${user.gmail}&su=SUBJECT&body=BODY`} className="pl-5"
                        target="_blank" rel="noopener noreferrer" >{user.gmail}</Link>
                </div>}

                <div className="w-[260px] pt-5 flex">
                    <Link href={user.linkedIn} target="_blank" rel="noopener noreferrer" className="p-5 text-[#0a66c2]">
                        <BsLinkedin size={30} />
                    </Link>

                    {user.instagram && <Link href={user.instagram} target="_blank" rel="noopener noreferrer" className="p-5">
                        <Image src={"/images/insta-logo.jpg"} alt="Insta" width={30} height={30} />
                    </Link>}

                    {user.twitter && <Link href={user.twitter} target="_blank" rel="noopener noreferrer" className="p-5">
                        <Image src={"/images/x-logo.svg"} alt="Insta" width={30} height={30} />
                    </Link>}

                </div>

            </div>



        </>
    )
}


export const getStaticProps = async () => {
    const staticData = data;
  return {
    props: { userIdMap: staticData.userIdMap }
  };
};
