import React from 'react';

const Section = ({ children, bgColor = 'transparent' }) => <section className={`${bgColor}`}>{children}</section>;

export default Section;
