import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sylcanaaioqyakgoxruv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5bGNhbmFhaW9xeWFrZ294cnV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNjUyNzAsImV4cCI6MTk4Mzk0MTI3MH0.uhyDcnQWSk746uNPF_IT-Y9R_ohgPefVFaqZPqc43Ks";
const supabase = createClient(supabaseUrl, supabaseKey);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video").select("*")
        }
    }
}