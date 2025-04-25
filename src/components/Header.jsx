import { Link } from "react-router-dom"

function Header() {
    return(
        <header className="flex justify-between items-center p-8">
            <div className="logo">
                <img className="w-[80px] h-[80px] object-contain" src="https://yt3.googleusercontent.com/AMLu-AR78nYbwEGN0xY1ndUrb8VM_EcnBUAgo-h7QSfxvh_B3xhx1clgKA5tUv4WKt5Ryt412g=s160-c-k-c0x00ffffff-no-rj" />
            </div>
            <nav className="flex gap-3">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
            </nav>
        </header>
    )
}
export default Header