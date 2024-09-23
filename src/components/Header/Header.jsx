import profile from "../../images/profile.png"

const Header = () => {
    
    return (
        <header className="flex   m-2 py-6  justify-between items-center border-b-2">
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;