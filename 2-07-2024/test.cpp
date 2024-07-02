#include<iostream>
using namespace std;
int main()
{
    int arr[] = {1,1,1,1,0,0,0,1};
    
    int size = sizeof(arr)/sizeof(arr[0]);
    int num;
    cin >> num;
    int count = 0;
    for(int i=0; i<size; i++)
    {
        if(arr[i] == num)
        {
            count++;
        }
    }

    cout<<count;

    return 0;
}