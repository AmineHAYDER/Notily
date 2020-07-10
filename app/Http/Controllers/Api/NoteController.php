<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Note;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $results = Note::where('id','>',0)
           ->orderBy('created_at', 'desc')
           ->get();
       return $results ;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $Note =new note; // create model object
        $request->validate($Note->rules,$Note->messages); // Validate the request

        $Note->name = $request->name;
        $Note->note = $request->note;
        $Note->password = Hash::make($request->password);  //store a the hashed value of the password
        $Note->save();
        return $Note;

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $Note = Note::where('id', $request->id)->first();
        if (Hash::check($request->password, $Note->password)) {  //checking password
            $Note->note = $request->note ;
            $Note->save();
            return $Note ;
        }
        return response('invalid password', 401) ;

    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $Note = Note::where('id', $request->id)->first();
        if (Hash::check($request->password, $Note->password)) {
            $NoteDeleted = Note::where('id', $request->id)->delete();
            return response('deleted', 204) ;
        }
        return response('invalid password', 401) ;
    }
}
