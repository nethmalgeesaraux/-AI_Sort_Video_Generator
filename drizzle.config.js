/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",   
  dialect: "postgresql",           
  dbCredentials: {
    url:' postgresql://neondb_owner:npg_VNRQ51SOtPhT@ep-summer-cloud-a4m8hnc1-pooler.us-east-1.aws.neon.tech/ai_shot_video_generator?sslmode=require&channel_binding=require, '      
  },
};
