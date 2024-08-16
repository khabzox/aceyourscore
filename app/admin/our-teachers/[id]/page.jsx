import TeacherForm from "@/components/admin/teachers/TeacherForm";
import config from "@/config";
async function getTeacherById(id) {
  try {
    const res = await fetch(
      `${config.domainName}/api/our-teachers/${id}`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to get Teacher.");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function TeacherPage({ params }) {
  const teacherId = params.id
  console.log(teacherId)
  const EDITMODE = teacherId == "new" ? false : true;
  let updateTeacherData = {};

  if (EDITMODE) {
    updateTeacherData = await getTeacherById(teacherId);
    updateTeacherData = updateTeacherData.foundTeacher;
  } else {
    updateTeacherData = {
      id: "new",
    };
  }
  return <TeacherForm teacher={updateTeacherData} teacherId={teacherId} />;
}
