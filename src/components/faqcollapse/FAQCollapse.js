import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import './style.scss';

const FAQCollapse = ({ title, desc, i }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="faqcollapse">
      <h4
        className={isOpen ? 'h4' : 'h4 collapsed'}
        onClick={toggle}
        style={{ marginBottom: '1rem' }}
        aria-controls={`collapse${i}`}
        id={`heading${i}`}
      >
        {title}
      </h4>
      <Collapse
        isOpen={isOpen}
        data-parent="#faqacc"
        role="tabpanel"
        aria-labelledby={`heading${i}`}
        id={`collapse${i}`}
      >
        {desc}
      </Collapse>
    </div>
  );
};
export default FAQCollapse;
