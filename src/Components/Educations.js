import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
// import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

function Educations() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"201 - 2022"}
            title={"Computer Science Degree"}
            subTitle={"Sussex University"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"A - Levels"}
            subTitle={"Church Hill High"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
          <ResumeItem
            year={"2015 - 2017"}
            title={"High School Graduation"}
            subTitle={"ABC School"}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.div`
  /* display: flex; */
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Educations;
