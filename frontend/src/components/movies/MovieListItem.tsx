import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarDay, FaClock, FaStar } from "react-icons/fa";

import Movie from "@/types/Movie";
import TextIconBox from "../ui/TextIconBox";

export default function MovieListItem({ movie }: { movie: Movie }) {
  const { title, slug, poster, rating, release_date, running_time } = movie.attributes;

  return (
    <div className="rounded border-2 border-gray-200 p-4 flex flex-col">
      <div className="flex items-center justify-center mb-2">
        <div className="w-72 h-72 flex justify-center">
          <Image
            src={poster || "/images/missing_movie.svg"}
            alt={title}
            className="rounded-lg h-auto w-auto object-contain object-center"
            width={200}
            height={200}
            priority={!poster}
          />
        </div>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="space-y-1 mt-3">
          {release_date && (
            <TextIconBox icon={FaCalendarDay} text={new Date(release_date).toLocaleDateString()} />
          )}
          {rating && <TextIconBox icon={FaStar} text={rating} />}
          {running_time && <TextIconBox icon={FaClock} text={running_time} />}
        </div>
      </div>
      <Link
        href={`/movies/${slug}`}
        className="mt-auto text-center bg-secondary rounded-lg py-2 text-white opacity-90 hover:opacity-100">
        View Movie
      </Link>
    </div>
  );
}
