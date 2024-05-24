
export default {
    name:'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            title: 'Title of Blog article',
            type:'string',
        },
        {
            name: 'slug',
            title: 'Slug for blog article',
            type:'slug',
            options:{
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name:'blogImage',
            title:'Image for blog article',
            type:'image',
        },
        {
            name:'smallDescription',
            title:'Small description for blog article',
            type:'text',
        },
        {
            name:'blogContent',
            title:'Content for blog article',
            type:'array',
            of:[
                {
                    type:'block'
                }
            ]
        }

        ]
}