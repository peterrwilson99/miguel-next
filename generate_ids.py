import json
import os

PROJECT_PATH = os.path.join("src","projects.json")

def create_project_id(project):
    project["id"] = project["title"].replace(" ","-").replace("_","-").replace("/","").replace("\\","").replace("?","").lower()
    project["link"] = "/projects/" + project["id"]
    return project
    

def main():
    with open(PROJECT_PATH, "r") as readObj:
        str_file = readObj.read().replace('"../static','"/static')
        projects = json.loads(str_file)
    for index, project in enumerate(projects):
        projects[index] = create_project_id(project)
    with open(PROJECT_PATH, "w") as writeObj:
        json.dump(projects, writeObj, indent=4)

if __name__ == "__main__":
    main()