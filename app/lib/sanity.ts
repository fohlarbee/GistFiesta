import  ImageUrlBuilder  from '@sanity/image-url';
import {createClient} from 'next-sanity'


export const client = createClient({
    dataset:'production',
    apiVersion:'2023-05-03',
    projectId:'31e6uhqa',
    useCdn:false


});

const builder = ImageUrlBuilder(client);

export function imageUrl (source: any){
    return builder.image(source).url()
};
