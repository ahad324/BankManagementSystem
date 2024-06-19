import React, { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import { gsap } from "gsap";
import SlotCounter from "react-slot-counter";

const PROJECT_ID = "666b2d4b002579cc85ea";
const DATABASE_ID = "666b30e2001dda7640db";
const COLLECTION_ID_USERS = "666caf8d003db35e8a54";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);
const databases = new Databases(client);

const UsersRegisterCount = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const getUsersCount = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID_USERS,
          []
        );
        setcount(response.total);
      } catch (error) {
        console.error("Error fetching Users Count:", error);
      }
    };

    getUsersCount();

    const unsubscribe = client.subscribe(
      `databases.${DATABASE_ID}.collections.${COLLECTION_ID_USERS}.documents`,
      (response) => {
        if (
          response.events.includes(
            "databases.*.collections.*.documents.*.create"
          ) ||
          response.events.includes(
            "databases.*.collections.*.documents.*.delete"
          )
        ) {
          getUsersCount();
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let duration = 2,
      delay = 5.5;
    gsap.from(".counter", {
      duration: duration,
      opacity: 0,
      y: 100,
      ease: "power3.out",
      delay: delay,
    });
    gsap.to(".counter", {
      duration: duration,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      stagger: 0.5,
      delay: delay,
    });
  }, []);

  return (
    <div className="counter w-[100%] z-50 absolute text-2xl top-[90%] flex justify-center items-center">
      <h1 className="font-semibold flex justify-center items-center">
        Total Users :
        <SlotCounter
          value={count}
          duration={1.2}
          startValue={0}
          startValueOnce={true}
          debounceDelay={1}
          animateUnchanged={true}
          numberClassName="CounterNumber font-semibold"
          animateOnVisible={{
            triggerOnce: false,
            rootMargin: "0px 0px -10px 0px",
          }}
        />
      </h1>
    </div>
  );
};

export default UsersRegisterCount;
