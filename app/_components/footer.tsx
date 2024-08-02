
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterCompo() {
  return (
    <Footer bgDark>
      <div className="w-full flex flex-col justify-center">
        <div className="grid bg-[#E17E26] w-full grid-cols-2 gap-8 px-12 py-8 md:grid-cols-4">
          <div className="">
            <FooterTitle title="Company" />
            <FooterLinkGroup col className="">
              <FooterLink href="#" className="hover:underline">About</FooterLink>
              <FooterLink href="#" className="hover:underline">Careers</FooterLink>
              <FooterLink href="#" className="hover:underline">Brand Center</FooterLink>
              <FooterLink href="#" className="hover:underline">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="help center" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="hover:underline">Discord Server</FooterLink>
              <FooterLink href="#" className="hover:underline">Twitter</FooterLink>
              <FooterLink href="#" className="hover:underline">Facebook</FooterLink>
              <FooterLink href="#" className="hover:underline">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Legal" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="hover:underline">Privacy Policy</FooterLink>
              <FooterLink href="#" className="hover:underline">Licensing</FooterLink>
              <FooterLink href="#" className="hover:underline">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
          <div className="flex flex-col">
                <h1>Logo</h1>
                <a href="mailto:vanshajtiwari62@gmail.com" className="py-2 px-3 max-w-[120px] border-2 border-white rounded-md text-white hover:text-[#962E14] hover:bg-white">Contact Us</a>
          </div>
        </div>
        <div className="w-full bg-[#962E14] px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="ProjectIGI" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
