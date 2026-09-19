"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
useRouter;

const page = () => {
  const [file, setFile] = useState<any>();
  const [file2, setFile2] = useState<any>();
  const [style, setStyle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | any>(0);

  const router = useRouter();

  const submit = async () => {
    const formData = new FormData();
    formData.append("cloth", file);
    formData.append("style", style);
    formData.append("amount", amount);
    formData.append("description", description);
    const upload = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
    const result = await upload.json();
    console.log(result);
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const photo = e.target.files[0];
      if (photo) {
        setFile(photo);
        setFile2(URL.createObjectURL(photo));
        console.log(file2);
        console.log(file);
      }
      console.log(photo);
    }else {
        console.log("Error")
    }
    
  };

  return (
    <section>
      <div className="bg-[#faf7f4] pb-6 m-5 mt-16 md:m-20 rounded-4xl">
        <p className="text-4xl text-center pt-12 pb-6">
          You can upload Images here
        </p>
        <input
          onChange={(e) => setStyle(e.target.value)}
          type="text"
          className="md:w-1/3 w-3/4 flex items-center rounded-2xl border border-slate-600 h-12 pl-2 justify-center mx-auto mt-5"
          placeholder="Name of the style"
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="md:w-1/3 w-3/4 flex items-center rounded-2xl border border-slate-600 h-12 pl-2 justify-center mx-auto mt-5"
          placeholder="Amount in Naira"
        />
        <input
          accept="image/*"
          onChange={handlePhoto}
          className="h-32 w-4/5 md:w-1/5 mx-auto py-auto mt-12 border- border-dotted border-2 border-black  flex items-center justify-center"
          type="file"
        />
        {file2 && (
          <img
            src={file2}
            className="w-32 h-32 rounded-full object-cover mx-auto mt-12"
            alt=""
          />
        )}
        <textarea
          value={description}
          name=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          className="md:w-1/3 w-3/4 flex items-center rounded-2xl border border-slate-600 h-24 pl-2 justify-center mx-auto mt-5"
          placeholder="description"
          id=""
        ></textarea>
        <button
          onClick={() => {
            (submit(), router.push("/shop"));
          }}
          className="px-5 py-1 bg-slate-900 cursor-pointer text-white text-2xl rounded-2xl flex justify-center mt-10 items-center mx-auto"
        >
          upload
        </button>
      </div>
    </section>
  );
};

export default page;
