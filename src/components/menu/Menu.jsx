import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "active")}>
    
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Anasayfa</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Work</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Referanslar</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">İletişim</a>
            </li>
        </ul>
    </div>
  )
}
