FROM node:18-alpine

WORKDIR /usr/src/app

# คัดลอก package.json และ package-lock.json ก่อนเพื่อติดตั้ง dependencies
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install --legacy-peer-deps

# คัดลอก source code ทั้งหมดหลังจากติดตั้ง dependencies เสร็จ
COPY . .

# สร้าง build สำหรับโปรเจกต์ React/Next.js
RUN npm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# รันแอปพลิเคชัน
CMD ["npm", "start"]
