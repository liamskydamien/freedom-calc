import NavigationLifeChart from "../navigation/NavigationLifeChart";

const Footer = () => {
    return (
        <footer className="left-0 z-99999 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6 bg-backgroundSecondary">
            <NavigationLifeChart/>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <a href="https://github.com/liamskydamien/freedom-calc" className="hover:underline"> © 2023 FreedomCalc</a>
            <p className="font-thin text-xs text-left">
                Liam Hess, Nhật Nguyên & Hải Nam
            </p>
        </span>
        </footer>
    );
}

export default Footer;
