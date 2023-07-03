const Footer = (): any => {
  return (
    <footer className="text-white flex flex-col justify-center items-center pb-6 absolute inset-x-0 bottom-0 opacity-50">
      <p className="text-sm font-light">Copyrights © 2023 SCI.com. All Rights Reserved.</p>
      <div className="flex flex-row text-sm font-normal">
        <div>Terms of Use</div>
        <ul className="list-outside list-disc ml-6">
          <li></li>
        </ul>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
};

export default Footer;
