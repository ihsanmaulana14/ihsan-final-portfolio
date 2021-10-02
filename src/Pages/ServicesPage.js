import React from 'react';
import { MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSetion';

function ServicesPage() {
    return (
        <MainLayout>
            <ServicesSection />
            <ReviewsSection />
        </MainLayout>
    )
}

export default ServicesPage
