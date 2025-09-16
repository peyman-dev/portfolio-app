"use client";
import React from "react";
import { achievementsGallery } from "../../../../settings";
import Image from "next/image";
import { Button } from "@radix-ui/themes";
import { useModal } from "@/app/core/hooks/use-modal";
import useIsMobile from "@/app/core/hooks/use-is-mobile";
import { useRouter } from "next/navigation";

const Gallery = () => {
  const { openModal, closeModal } = useModal();
  const isMobile = useIsMobile();
  const router = useRouter()

  const handleOpenIframe = (href: string) => {
    const Content = (
      <div className="md:w-[768px]!  md:h-[568px]! min-h-screen!">
        <iframe src={href} width={"100%"} height={"100%"} />
      </div>
    );

    if (isMobile) {
        router.push(href)
    } else {
      openModal(Content);
    }
  };

  return (
    <div className="grow space-y-10">
      {achievementsGallery.map((data, i) => (
        <div className="space-y-4">
          <Image
            src={data.img}
            className="rounded-xl border border-black/10!"
            alt={`Image-${i + 1}`}
            width={1000}
            height={320}
          />
          <div className="space-y-3">
            <p className="text-xl">
              <strong>{data.title}</strong>
            </p>
            <Button
              className="bg-black! px-4! rounded-xl! text-white! h-12! text-sm!"
              onClick={() => {
                handleOpenIframe(data.link);
              }}
            >
              View example work
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
