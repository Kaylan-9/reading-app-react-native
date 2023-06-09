import { useCallback, useEffect, useState } from 'react';
import requestParameters from '../settings/requestParameters';
import { IBookUserCategories } from '../types/data/books';

const useRandomMangas= ()=> {
  const mangaLimit= 10;
  const [mangas, setMangas]= useState<IBookUserCategories[] | []>([]);
  const [pullContent, setPullContent]= useState(true);
  const [iDsMangas, setIDsMangas]= useState<number[]>([]);

  const contentRequest= useCallback(async () => {
    const requestMangas= await fetch('https://reading-app-zeta.vercel.app/api/book/random', {
      ...requestParameters.json,
      body: JSON.stringify({
        iDs: iDsMangas
      })
    });
    const responseMangas= await requestMangas.json();
    setMangas(oldMangas=> [...oldMangas, responseMangas]);
    setIDsMangas((oldIDsMangas: number[] | any)=> [...oldIDsMangas, responseMangas.id]);
    return responseMangas;
  }, [mangas, iDsMangas]);
  
  useEffect(() => {
    if(iDsMangas.length<mangaLimit) {
      setTimeout(async ()=> {
        await contentRequest();
        setPullContent(oldPullContent=>!oldPullContent);
      }, 125);
    }
  }, [pullContent]);

  return { mangas };

};

export default useRandomMangas;