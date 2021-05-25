// 'use strict';
import './style.css'
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// Ian & Leon

export default function Filter() {
  return(
    <div className="text-align-center">
      <div className="background-image">
        <div className="container">
          <div className="title">
            <div className="container">
              <div className="titles">
                <div className="title-one">
                  <h1 className="headerone">
                    <span className="logo">&nbsp;</span>INFOrm
                  </h1>
                </div>
                <div className="title-two">
                  <h2 className="headertwo">
                    Browse Informatics Courses
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="search">
            <DropdownFilters />
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownFilters() {
  let tracks = ['Biomedical & Health Informatics', 'Data Science', 'Human-Computer Interaction', 'Information Architecture', 'Information Assurance and Cybersecurity'];
  let quarter = ['SU21', 'AU21','WI22', 'SP22'];
  let offering = ['INFO', 'NON-INFO'];

  return(
    <div className="dropdown-filters">
      
      <FilterDropdown options={tracks} name="Tracks" />
      <FilterDropdown options={quarter} name="Quarter" />
      <FilterDropdown options={offering} name="Offering" />

    </div>
  )
}

// function DropdownTest() {
//   return(
//     <div className="dropdown">
//       <button id="dropdownMenuTrack" 
//       className="btn btn-secondary btn-d-default dropdown-toggle" 
//       type="button" data-toggle="dropdown" 
//       aria-haspopup="true"
//       aria-expanded="true">
//         Track
//       </button>
//       <ul
//         className="dropdown-menu checkbox-menu"
//         aria-labelledby="dropdownMenuTrack"
//         data-handledropdownclose="true"
//       >
//         <li>
//           <label>
//             <input
//               type="checkbox"
//               className="checkboxTrack"
//               name="BIO"
//             />
//             Biomedical and Health Informatics
//           </label>
//         </li>
//       </ul>
//     </div>
//   );
// }

function FilterDropdown (props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  let dropdownOptions = props.options.map(d => {
    return <DropdownItem>{d}</DropdownItem>;
  });
  
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.name}
      </DropdownToggle>
      <DropdownMenu>
        {dropdownOptions}
      </DropdownMenu>
    </Dropdown>
  );
}


