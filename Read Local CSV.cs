/* 
  Authored by:
  James Krolik

  Objective:  I have a CSV on disk that I need to programmatically reference.
  Use Case:   I have a Forms process where a CSV is uploaded, and I need
              to parse the data and do something with it in later steps.

  Note:       Ensure you select the 'SDK Script' object in workflow designer.
  
*/

namespace WorkflowActivity.Scripting.SDKScript {
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.IO;

public class Script1 : ScriptClass90
{
    protected override void Execute()
    {
        //Escaped path to the root folder.
        string fpath = "D:\\WorkflowTemp\\";
        if (!Directory.Exists(fpath))
            Directory.CreateDirectory(fpath);

        //Filename
        string filename = "myfile.csv";

        //Combine the filename with the path.
        string filepath = Path.Combine(fpath, filename);

        // Check if file exists before reading
        if (!File.Exists(filepath))
        {
            throw new Exception("CSV file not found: " + filepath);
        }

        // Read all lines from the CSV file
        string[] lines = File.ReadAllLines(filepath);

        // Process each line
        foreach (string line in lines)
        {
            // Split columns by comma
            string[] columns = line.Split(',');

            //All tokens that are set will be available as pickable variables after the scripting object.
            SetToken("data",columns[0]);
        }
    }
}

}

