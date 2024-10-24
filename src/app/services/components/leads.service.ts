import { Injectable } from '@angular/core';
    
@Injectable()
export class LeadsService {
    getProductsData() {
        return [
            
            {
                id: '1',
                nationality: 'Egypt',
                name: 'Ahmed',
                emp: 'Nicola',
                representative:'Nicola',
                score: 1,
                status:"Docs uploaded",
                phone_number: "123456789",
                email_address:"ahmed@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 3,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2023',               
                tags:['Data Science'],
                reminder: 3,
                doc:'2026-05-25'
            },
            
            {
                id: '2',
                nationality: 'Egypt',
                name: 'Mohamed',
                emp: 'Nicola',
                representative:'Salah',
                score: 3,
                status:"Account Created",
                phone_number: "987654321",
                email_address:"mohamed@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 3,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'September',
                intakeY:'2025',               
                tags:['Data Science'],
                reminder: 10,
                doc:'2023-09-14'
            },
            {
                id: '3',
                nationality: 'Egypt',
                name: 'Mohaned',
                emp: 'Nicola',
                representative:'Oumima',
                score: 4,
                status:"Invited lead",
                phone_number: "4456633",
                email_address:"mohaned@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 3,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'September',
                intakeY:'2026',               
                tags:['Data Science'],
                reminder: 15,
                doc:'2025-10-6'
            },
            {
                id: '4',
                nationality: 'Egypt',
                name: 'Hager',
                emp: 'Nicola',
                representative:'Hasna',
                score: 5,
                status:"Invited lead",
                phone_number: "7766523455",
                email_address:"hager@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 3,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2024',               
                tags:['Data Science'],
                reminder: 22,
                doc:'2023-09-14'
            },
            {
                id: '4',
                nationality: 'Egypt',
                name: 'mai',
                emp: 'Nicola',
                representative:'Hasna',
                score: 3,
                status:"Invited lead",
                phone_number: "7766523455",
                email_address:"mai@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 3,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2024',               
                tags:['Data Science'],
                reminder: 6,
                doc:'2023-09-14'
            },
            {
                id: '4',
                nationality: 'Egypt',
                name: 'Kamal',
                emp: 'Marwa',
                representative:'Hasna',
                score: 5,
                status:"Invited lead",
                phone_number: "7766523455",
                email_address:"Kamal@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 3,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2024',               
                tags:['Data Science'],
                reminder: 2,
                doc:'2023-09-14'
            },
            {
                id: '4',
                nationality: 'Egypt',
                name: 'Emad',
                emp: 'Marwa',
                representative:'Hasna',
                score: 1,
                status:"Invited lead",
                phone_number: "7766523455",
                email_address:"Emad@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 3,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2024',               
                tags:['Data Science'],
                reminder: 22,
                doc:'2023-09-14'
            },
            {
                id: '4',
                nationality: 'Egypt',
                name: 'Farag',
                emp: 'Salah',
                representative:'Salah',
                score: 1,
                status:"Invited lead",
                phone_number: "7766523455",
                email_address:"Farag@gmail.com",
                soi: ['EPITA', 'OMNES: INSEEC'],
                poi: ['Innovative Information', 'Program Information'],
                foi: ['filed of', 'new filed'],
                accountCreation: 3,
                source: ['Facebook Groups', 'Study in France FB Group'],
                previousSchool: 'AD EDUCATION',
                intakeM:'January',
                intakeY:'2024',               
                tags:['Data Science'],
                reminder: 22,
                doc:'2023-09-14'
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