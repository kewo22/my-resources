import { PrismaClient } from "@prisma/client";


// let prisma;

// if (process.env.NODE_ENV === 'production') {
//     prisma = new PrismaClient()
// } else {
//     if (!global.prisma) {
//         global.prisma = new PrismaClient()
//     }
//     prisma = global.prisma
// }
// export default prisma


const prisma = (globalThis as any).prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") (globalThis as any).prisma = prisma


// const prisma = new PrismaClient(
//     // {
//     //     datasources: {
//     //         db: {
//     //             url: "mongodb+srv://kewo22:tOoMhmkRcwMJOzr0@cluster0.64jtd2x.mongodb.net/my-resources"
//     //         }
//     //     }
//     // }
// );

export default prisma;
