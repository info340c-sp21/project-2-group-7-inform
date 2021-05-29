// Daniel & Catherine
import React from 'react';
import './style.css'
import { Icon } from '@iconify/react';
import paperPlaneO from '@iconify-icons/fa/paper-plane-o';


export default function Footer() {
  return(
      <footer>
      <div className="footer-content fixed-bottom">
        <p className="text-center">Copyright &copy; 2021 Leon & Ian & Catherine & Daniel</p>
        <p className="text-center">
          <Icon icon={paperPlaneO} />
          <a href="mailto:leonykan@uw.edu" className="text-white">Contact Us</a>
        </p>
      </div>
    </footer>
  );
}