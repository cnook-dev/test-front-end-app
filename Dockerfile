# เลือก base image ที่มี Node.js
FROM node:alpine3.19

# กำหนด working directory ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json เข้าไปใน container
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ source code เข้าไปใน container
COPY . .

ENV PATH /app/node_modules/.bin:$PATH

# สร้าง build สำหรับโปรเจกต์ (ถ้าใช้ React)
RUN npm run build

# เปิดพอร์ต 3000 (ถ้าแอปของคุณรันบนพอร์ตนี้)
EXPOSE 3000

# คำสั่งสำหรับรันแอปพลิเคชัน (Next.js ใช้ npm run start หรือ npm run build)
CMD ["npm", "start"]
