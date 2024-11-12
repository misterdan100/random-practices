import { TNote } from "@/interfaces";

export const getNotes = async () => {
  const apiURL = "http://127.0.0.1:8090/api/collections/notes/records";
  const res = await fetch(apiURL, { cache: "no-store" })
    .then((data) => data.json())
    .catch((error) => {
      console.log("[ERROR: GETNOTES]");
      console.log(error);
    });

  return res.items as TNote[];
};


export const deleteNote = async (id: string) => {
  const apiURL = "http://127.0.0.1:8090/api/collections/notes/records"
  await fetch(`${apiURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': "application/json"
    },
  }).then(() => null)
    .catch(error => console.log(error))
}

export const getNote = async (id: string) => {
  const url = 'http://127.0.0.1:8090/api/collections/notes/records'

  const res = await fetch(`${url}?filter=(id='${id}')`, { cache: "no-store" })
                          .then(data => data.json())
                          .catch(error => console.log(error))

  return res.items[0] as TNote 
}

export const updateNote = async (note: TNote) => {
  const url = 'http://127.0.0.1:8090/api/collections/notes/records'

  const res = await fetch(`${url}/${note.id}`, {
    cache: 'no-store',
    method: 'PATCH',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      title: note.title,
      content: note.content
    }),
  
  }).catch(error => console.log('[ERROR]', error))
}