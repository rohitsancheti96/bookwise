"use client";

import { useRef, useState } from "react";
import { IKImage, ImageKitProvider, IKUpload } from "imagekitio-next";
import config from "@/lib/config";
import Image from "next/image";

const {
  env: {
    imagekit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(
      config.env.apiEndpoint.endpoint + "/api/auth/imagekit"
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        "Request failed with status: " + response.status + " - " + errorText
      );
    }

    const data = await response.json();
    return {
      signature: data.signature,
      expire: data.expire,
      token: data.token,
    };
  } catch (error: any) {
    throw new Error("Failed to authenticate: " + error.message);
  }
};

export default function ImageUpload({
  onFileChange,
}: {
  onFileChange: (filePath: string | null) => void;
}) {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string | null }>(null);

  const onError = (error: any) => {
    console.log(error);
  };
  const onSuccess = (response: any) => {
    setFile(response);
    onFileChange(response.filePath);
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        className="hidden"
        onError={onError}
        onSuccess={onSuccess}
        fileName="test-upload.png"
      />

      <button
        className="upload-btn"
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="text-base text-light-100">Upload a File</p>
        {file && <p className="upload-filename">{file.filePath}</p>}
      </button>

      {file && (
        <IKImage
          alt={file.filePath}
          path={file.filePath}
          width={500}
          height={500}
        />
      )}
    </ImageKitProvider>
  );
}
