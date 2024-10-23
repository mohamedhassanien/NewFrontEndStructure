import { Injectable } from '@angular/core';
    


@Injectable()
export class ProspectService {
    getProductsData() {
        return [
          
            
            {
                id: '2',
                nationality: 'Egypt',
                name: 'Mohamed',
                emp: 'Nicola',
                representative:'Salah',
                score: 3,
                status:"First contact",
                phone_number: "987654321",
                email_address:"mohamed@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 1,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'September',
                intakeY:'2025',               
                tags:['Data Science'],
                reminder: 10,
                doc:'2023-09-14'
            },
            {
                id: '4',
                nationality: 'Egypt',
                name: 'Hager',
                emp: 'Nicola',
                representative:'Hasna',
                score: 5,
                status:"Checking program",
                phone_number: "7766523455",
                email_address:"hager@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 20,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2024',               
                tags:['Data Science'],
                reminder: 22,
                doc:'2023-09-14'
            },
            {
                id: '3',
                nationality: 'Egypt',
                name: 'Mohaned',
                emp: 'Nicola',
                representative:'Oumima',
                score: 4,
                status:"Preparing docs",
                phone_number: "4456633",
                email_address:"mohaned@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 9,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'September',
                intakeY:'2026',               
                tags:['Data Science'],
                reminder: 15,
                doc:'2025-10-6'
            },
            {
                id: '1',
                nationality: 'Egypt',
                name: 'Ahmed',
                emp: 'Nicola',
                representative:'Nicola',
                score: 1,
                status:"First contact",
                phone_number: "123456789",
                email_address:"ahmed@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 12,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2023',               
                tags:['Data Science'],
                reminder: 3,
                doc:'2026-05-25'
            },
            {
                id: '5',
                nationality: 'Egypt',
                name: 'manal',
                emp: 'Salah',
                representative:'Nicola',
                score: 2,
                status:"First contact",
                phone_number: "123456789",
                email_address:"manal@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 30,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2023',               
                tags:['Data Science'],
                reminder: 30,
                doc:'2026-05-25'
            },
            {
                id: '14',
                nationality: 'Egypt',
                name: 'Mai',
                emp: 'Nicola',
                representative:'Marwa',
                score: 3,
                status:"First contact",
                phone_number: "123456789",
                email_address:"Mai@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 12,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2023',               
                tags:['Data Science'],
                reminder: 12,
                doc:'2026-05-25'
            },
            {
                id: '20',
                nationality: 'Egypt',
                name: 'Hossam',
                emp: 'Nicola',
                representative:'Nicola',
                score: 2,
                status:"First contact",
                phone_number: "123456789",
                email_address:"Hossam@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 19,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2023',               
                tags:['Data Science'],
                reminder: 19,
                doc:'2026-05-25'
            },
            
            
        ];
    }
    getProductsMini() {
        return Promise.resolve(this.getProductsData());
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }
};