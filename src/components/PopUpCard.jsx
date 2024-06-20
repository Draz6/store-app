import React from 'react';
import Popper from "@mui/material/Popper";
import '../styles/PopUpCard.css'

export default function PopUpCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { pic, name,} = props
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" id="openBtn"  onClick={handleClick}></button>
      <div>
        <Popper id={id} open={open} anchorEl={anchorEl} className="popup"><div >
          <div> <button onClick={handleClick} id="closeBtn" >X</button></div>
            <img src={pic} alt="No-photo" />
            <h1 >{name} </h1>
        </div>
        </Popper>
      </div>
    </div>
  );
}