const SidebarItem = ({ name, active, handleClick }) => {
  return (
    <button
      className={`sidebar__item ${active && 'sidebar__item--active'}`}
      onClick={handleClick}
    >
      {name}
    </button>
  )
}

export default SidebarItem
