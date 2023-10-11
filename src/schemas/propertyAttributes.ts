import { defineField, defineType } from 'sanity'

export default defineField({
    name: 'propertyAttributes',
    title: 'Property Features',
    type: 'object',
    groups: [
        {
          name: 'interior',
          title: 'Interior Features',
        },
        {
            name: 'exterior',
            title: 'Exterior Features',
          },
          {
            name: 'lotDetails',
            title: 'Property/Lot Details',
          },
          
      ],
    fields: [
        defineField({
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Single Family', value:'singleFamily'},
                    {title: 'Multi Family', value: 'multiFamily'},
                    {title: 'Mixed Use', value: 'mixedUse'},
                    {title: 'Land', value:'land'},
                    {title: 'Condo', value: 'condo'},
                    {title: 'Coop', value: 'coop'},
                    {title: 'Commercial Sales', value: 'commercialSales'},
                    {title: 'Commercial Rental', value: 'commercialRental'},
                    {title: 'Residential Rental', value: 'residentialRental'},
                ]
            }
        }),
        defineField({
            name: 'mlsNumber',
            title: 'MLS number',
            type: 'number'
        }),
        defineField({
            title: 'Bedrooms',
            name: 'bedrooms',
            type: 'number',
            group: 'interior'
        }),
        defineField({
            title: 'Price',
            name: 'price',
            type: 'number'
        }),
        defineField({
            title: 'Price Per Sqft',
            name: 'priceSqFt',
            type: 'number'
        }),
        defineField({
            title: 'HOA',
            name: 'hoa',
            type: 'string'
        }),
        defineField({
            title: 'Bathrooms',
            name: 'bathrooms',
            type: 'number',
            group: 'interior'
        }),
        defineField({
            name: 'numberRooms',
            title: 'Number of Rooms',
            type: 'number',
            group: 'interior'
        }),
        defineField({
            name: 'numberFloors',
            title: 'Number of Floors',
            type: 'number',
            group: 'interior'
        }),
        defineField({
            name: 'roof',
            title: 'Type of Roof',
            type: 'string',
            group: 'exterior'
        }),
        defineField({
            name: 'buildingMaterials',
            title: 'Building Materials',
            type: 'string',
            group: 'exterior'
        }),
        defineField({
            name: 'basement',
            title: 'Basement Type',
            type: 'string',
            group: 'interior'
        }),
        defineField({
            name: 'appliances',
            title: 'Appliances',
            type: 'string',
            group: 'interior'
        }),
        defineField({
            name: 'lotSize',
            title: 'Lot size (sqft)',
            type: 'number',
            group: 'lotDetails'
        }),
        defineField({
            name: 'houseSqft',
            title: 'House SqFt',
            type: 'number',
            group: 'lotDetails'
        }),
        defineField({
            name: 'unitNumber',
            title: 'Unit/ Apt Number',
            type: 'string',
            group: 'lotDetails'
        }),
        
        defineField({
            name: 'yearBuilt',
            title: 'Year Built',
            type: 'number',
            group: 'lotDetails'
        }),
        defineField({
            title: 'A/C',
            name: 'ac',
            type: 'string',
            group: 'interior'
        }),
        defineField({
            title: 'Flooring Materials',
            name: 'flooring',
            type: 'string',
            group: 'interior'
        }),
        defineField({
            title: 'Heating',
            name: 'heating',
            type: 'string',
            group: 'interior'
        }),
        defineField({
            name: 'parking',
            title: 'Parking',
            type: 'string',
            group: 'exterior',
            options: {
                list: [
                    {title: 'Garage', value: 'garage'},
                    {title: 'Driveway', value: 'driveway'},
                    {title: 'Street', value: 'street'}
                ]}
        })
    ]
})