import React from "react";
import "./FirstSection.css";
import firstSectionPhotoOne from "../../accets/firstSection/firstSection_photo_one.jpg";
import firstSectionPhotoTwo from "../../accets/firstSection/firstSection_photo_two.jpg";

const FirstSection = () => {
  return (
    <div className="first_section_parent_div">
      <p className="first_section_text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio autem
        neque exercitationem in vel quibusdam quos, consectetur, quidem laborum
        provident incidunt voluptatem, quod hic possimus.
      </p>

      <div className="first_section_grid_div">
        <img src={firstSectionPhotoOne} alt="" />
        <div className="first_section_text_div">
          <p className="first_section_title">BLOG</p>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            doloribus. Alias, velit. Laudantium?
          </h4>
          <p>
            The work of government is challenging in high- and low-income
            countries alike. Today, new problems compound to make the work of
            government even harder: Governments must tackle poverty and address
            climate change while many are in the midst of debt and fiscal crises
            that were compounded by Covid.
          </p>
        </div>
      </div>
      <div className="first_section_grid_div">
        <div className="first_section_text_div">
          <p className="first_section_title">BLOG</p>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            doloribus. Alias, velit. Laudantium?
          </h4>
          <p>
            The work of government is challenging in high- and low-income
            countries alike. Today, new problems compound to make the work of
            government even harder: Governments must tackle poverty and address
            climate change while many are in the midst of debt and fiscal crises
            that were compounded by Covid.
          </p>
        </div>
        <img src={firstSectionPhotoTwo} alt="" />
      </div>
      <div className="first_section_grid_div">
        <img src={firstSectionPhotoOne} alt="" />
        <div className="first_section_text_div">
          <p className="first_section_title">BLOG</p>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            doloribus. Alias, velit. Laudantium?
          </h4>
          <p>
            The work of government is challenging in high- and low-income
            countries alike. Today, new problems compound to make the work of
            government even harder: Governments must tackle poverty and address
            climate change while many are in the midst of debt and fiscal crises
            that were compounded by Covid.
          </p>
        </div>
      </div>
      <div className="first_section_grid_div">
        <div className="first_section_text_div">
          <p className="first_section_title">BLOG</p>
          <h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            doloribus. Alias, velit. Laudantium?
          </h4>
          <p>
            The work of government is challenging in high- and low-income
            countries alike. Today, new problems compound to make the work of
            government even harder: Governments must tackle poverty and address
            climate change while many are in the midst of debt and fiscal crises
            that were compounded by Covid.
          </p>
        </div>
        <img src={firstSectionPhotoTwo} alt="" />
      </div>
    </div>
  );
};

export default FirstSection;
