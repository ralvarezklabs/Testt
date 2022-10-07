import { useCallback, useEffect, useMemo, useState } from 'react';
import { Data } from '../interfaces/data';
import items from '../../public/exports-files';
import { DataToRender, IDataModels } from '../interfaces/dataToRender';

interface UseModules {
  data?: IDataModels
}

const useModules = (): UseModules => {
  const [modules, setModules] = useState<IDataModels>()
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

      if (!(authModuleName in newData.data.auth_module)) {
        newData.setAuth_module(authModuleName, [user]);
        // newData.auth_module[authModuleName] = [user];
      } else {
        let value = newData.data.auth_module[authModuleName];
        value.push(user);
        newData.setAuth_module(authModuleName, value);
        //newData.auth_module[authModuleName] = value;
      }

      if (!(contentModuleName in newData.data.content_module)) {
        // newData.content_module[contentModuleName] = [user];
        newData.setContent_module(contentModuleName, [user]);
      } else {
        let value = newData.data.content_module[contentModuleName];
        value.push(user);
        newData.setContent_module(contentModuleName, value);
        //newData.content_module[contentModuleName] = value;
      }
    });
    setModules(newData.data);
  };

  return {
    data: modules,
  };
};

export default useModules;
