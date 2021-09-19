import React from 'react'
import styled from 'styled-components';
import {annimateScroll as scroll} from 'react-scroll';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSetion';


function AboutPage() {
    return (
        <MainLayout onScroll={() => scroll.scrollToMore(10)} smooth={true}>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
