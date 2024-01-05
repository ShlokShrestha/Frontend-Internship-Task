"use client";

import Image from "next/image";
import { Key, useRef, useState } from "react";

const DictionaryCard = ({ data }: { data: any }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>("noun");
  const toggleAudio = () => {
    if (audioRef.current?.pause) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <>
      <div className=" my-4 rounded-2xl p-5 border-solid border-2 border-gray-300">
        <div className="flex gap-2 items-center">
          <audio
            ref={audioRef}
            src={
              data.phonetics.find((phonetic: { audio: any }) => phonetic.audio)
                ?.audio
            }
          />
          <Image
            src={isPlaying ? "/pause.svg" : "/play.svg"}
            alt={isPlaying ? "pause" : "play"}
            width={40}
            height={40}
            onClick={toggleAudio}
          />
          <p>{data.phonetic}</p>
        </div>
        <div className="flex gap-3 mt-4 mb-2">
          <button
            className={`bg-gray-200 text-black px-3 rounded-md ${
              selectedTab === "noun" ? `active` : ""
            }`}
            onClick={() => setSelectedTab("noun")}
          >
            noun
          </button>
          <button
            className={`bg-gray-200 text-black px-3 rounded-md ${
              selectedTab === "verb" ? "active" : ""
            }`}
            onClick={() => setSelectedTab("verb")}
          >
            verb
          </button>
        </div>

        <div>
          {data &&
            data.meanings.map(
              (
                meaning: { partOfSpeech: string; definitions: any[] },
                index: Key
              ) =>
                meaning.partOfSpeech === selectedTab && (
                  <div key={index}>
                    <ol className="list-decimal list-inside">
                      {meaning.definitions.map((def, index) => (
                        <li key={index} className="my-1">
                          {def.definition}
                        </li>
                      ))}
                    </ol>
                  </div>
                )
            )}
        </div>
      </div>
    </>
  );
};

export default DictionaryCard;
