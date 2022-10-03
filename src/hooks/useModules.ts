import { useEffect, useState } from 'react';
import { Data } from '../interfaces/data';
import items from '../../public/exports-files';

interface UseModules {
  data?: Data[]
}

const useModules = (): UseModules => {
  const [modules, setModules] = useState<Data[]>()

  useEffect(() => {
    createJSONStructure(items);
  }, [])

  const createJSONStructure = (data: Data[] | undefined) => {
    let newData: any = { auth_module: {}, content_module: {} };
    data?.map((d) => {
      let authModuleName = d.provider.auth_module;
      let contentModuleName = d.provider.content_module;
      let user = d.name;

      if (!(authModuleName in newData.auth_module)) {
        newData.auth_module[authModuleName] = [user];
      } else {
        let value = newData.auth_module[authModuleName];
        value.push(user);
        newData.auth_module[authModuleName] = value;
      }

      if (!(contentModuleName in newData.content_module)) {
        newData.content_module[contentModuleName] = [user];
      } else {
        let value = newData.content_module[contentModuleName];
        value.push(user);
        newData.content_module[contentModuleName] = value;
      }
    });
    setModules(newData);
    console.log(newData);
  };

  console.log("modules", modules);
  return {
    data: modules,
  };
};

export default useModules;
