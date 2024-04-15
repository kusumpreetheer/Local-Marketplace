"use client"

import React, { useState, useRef, useEffect, RefObject } from 'react';
import Collection from "@/components/shared/Collection";
import CategoryFilter from "@/components/shared/CategoryFilter";
import { categories } from "@/constants";
import HomeHeader from '@/components/shared/HomeHeader';
import dummyServices from '@/constants/dummyServices';
import Search from '@/components/shared/Search';
import Link from 'next/link';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { ICategory } from '@/lib/database/models/category.model';
import { getAllCategories } from '@/lib/actions/category.actions';
import { IService } from '@/lib/database/models/service.model';
import { getAllServices, getServiceById } from '@/lib/actions/service.actions';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Recommendations");
  const [services, setServices] = useState<IService[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [opened, { open, close }] = useDisclosure(true);

  /*************************************************************************
   * Categories
   *************************************************************************/

  // Fetch categories
  useEffect(() => {
    // For "recommentdationnns"
    const recommendationCategory = {
      _id: 'recommendations',
      name: 'Recommendations'
    }

    const getCategories = async () => {
      const categoryList = await getAllCategories();
      categoryList && setCategories([recommendationCategory, ...categoryList]);
    }

    const getServices = async () => {

      const services = await getAllServices({
        query: '',
        limit: 100,
        page: 1,
        category: '',
      });
      services && setServices(services?.data);
    }

    getCategories();
    getServices();
  }, [])

  // Refs for scrolling to selected category
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Populate category refs by adding the element to the categoryRefs object
  const setCategoryRef = (categoryId: string, element: HTMLDivElement | null) => {
    categoryRefs.current[categoryId] = element;
  };

  // Scroll to selected category
  useEffect(() => {
    if (selectedCategory && categoryRefs.current[selectedCategory]) {
      categoryRefs.current[selectedCategory]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedCategory]);


  return (
    <>
      {/* <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        centered
        size="lg"
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <div className='flex flex-col p-4 gap-y-4'>
          <div className='flex-center'>
            <div className='h3-bold'>Thank you so much for visiting!</div>
          </div>
          <div className='p2-regular'>
            I am currently in the process of building this site but feel free to browse around and let me know if you have any feedback or suggestions! 🚀
          </div>
          <Button onClick={close} className='p-10 mx-auto'>
            <div className='h4-bold'>Browse around</div>
          </Button>
        </div>
      </Modal> */}

      <section className="sticky top-0 z-50 flex flex-col bg-white border-b border-gray-200 md:pb-2">
        <div className='wrapper'>
          <HomeHeader />
        </div>
        {/* Search */}
        <div className='wrapper lg:pt-0 '>
          {/* <div className='flex justify-between md:pb-2'>
            <Link href={"/search"} className='hidden w-full mx-4 sm:block '>
              <Search disabled={true} />
            </Link>
          </div> */}
          <CategoryFilter
            categories={categories}
            onCategorySelect={(categoryId: string) => {
              setSelectedCategory(categoryId);
            }}
          />
        </div>
      </section>

      {/* Collections */}
      <section className="pt-4 pb-2 wrapper lg:pr-0 lg:pb-0">
        <div className="flex flex-col gap-y-0">

          {categories.map((category) => (
            <div
              ref={el => setCategoryRef(category._id, el)}
              key={category._id}
              className='scroll-mt-[280px] md:scroll-mt-[320px] lg:scroll-mt-[320px]'
            >
              <Collection
                title={category}
                direction="horizontal"
                itemType="service"
                items={services.filter(service => {
                  if (category._id === 'recommendations') {
                    return services;
                  }
                  return service?.category._id === category._id
                })}
                nextPrevButton={true}
                hasViewMore={true}
                selectedCategory={selectedCategory}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );

}



