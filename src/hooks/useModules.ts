import { useCallback, useEffect, useMemo, useState } from 'react';
import { Data } from '../interfaces/data';
import items from '../../public/exports-files';
import { DataToRender } from '../interfaces/dataToRender';

interface UseModules {
  data?: DataToRender
}

const useModules = (): UseModules => {
  const [modules, setModules] = useState<DataToRender>()
  const calculation = useMemo(() => createJSONStructure(items), [items]);

  useEffect(() => {
    calculation;
   //createJSONStructure(items);
  }, [])

  // const setJSON = useCallback(() => {
  //   createJSONStructure(items);
  // }, [])


  function createJSONStructure (data: Data[]) {
    let newData: DataToRender = new DataToRender();
    data.map((d) => {
      let authModuleName = d.provider.auth_module;
      let contentModuleName = d.provider.content_module;
      let user = d.name;

      if (!(authModuleName in newData.auth_module)) {
        newData.setAuth_module(authModuleName, [user]);
        // newData.auth_module[authModuleName] = [user];
      } else {
        let value = newData.auth_module[authModuleName];
        value.push(user);
        newData.setAuth_module(authModuleName, value);
        //newData.auth_module[authModuleName] = value;
      }

      if (!(contentModuleName in newData.content_module)) {
        // newData.content_module[contentModuleName] = [user];
        newData.setContent_module(contentModuleName, [user]);
      } else {
        let value = newData.content_module[contentModuleName];
        value.push(user);
        newData.setContent_module(contentModuleName, value);
        //newData.content_module[contentModuleName] = value;
      }
    });
    setModules(newData);
  };

  return {
    data: modules,
  };
};

export default useModules;
